<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3Force from 'd3-force';
	import * as d3Selection from 'd3-selection';
	import * as d3Zoom from 'd3-zoom';
	import * as d3Drag from 'd3-drag';
	import type { Graph, GraphNode, GraphEdge } from '$lib/data/graph';
	import GraphControls from './GraphControls.svelte';

	interface Props {
		graph: Graph;
	}

	let { graph }: Props = $props();

	// Filter state
	let activeFilters = $state<string[]>(['technology', 'projects', 'hobbies']);

	// Compute visible nodes and edges based on filters
	let visibleNodes = $derived(
		graph.nodes.filter((n) => n.tags.some((t) => activeFilters.includes(t)))
	);

	let visibleEdges = $derived(
		graph.edges.filter(
			(e) =>
				visibleNodes.some((n) => n.slug === e.source) &&
				visibleNodes.some((n) => n.slug === e.target)
		)
	);

	let container: HTMLDivElement;
	let svg: SVGSVGElement;
	let width = $state(800);
	let height = $state(600);

	// D3 simulation
	let simulation: d3Force.Simulation<GraphNode, GraphEdge>;

	// Growth stage colors
	const growthColors: Record<string, string> = {
		seedling: '#22c55e', // green
		budding: '#eab308', // yellow
		evergreen: '#14b8a6' // teal
	};

	function getNodeColor(node: GraphNode): string {
		if (node.tags.includes('projects')) return '#f97316'; // orange
		if (node.tags.includes('hobbies')) return '#8b5cf6'; // purple
		return growthColors[node.growth] || '#6b7280'; // gray fallback
	}

	function getNodeRadius(node: GraphNode): number {
		// Larger nodes for tech with icons
		if (node.icon) return 24;
		// Medium for projects
		if (node.tags.includes('projects')) return 18;
		// Smaller for others
		return 14;
	}

	function initSimulation() {
		if (!svg) return;

		const svgSelection = d3Selection.select(svg);
		svgSelection.selectAll('*').remove();

		// Create zoom container
		const g = svgSelection.append('g').attr('class', 'zoom-container');

		// Setup zoom behavior
		const zoom = d3Zoom
			.zoom<SVGSVGElement, unknown>()
			.scaleExtent([0.2, 4])
			.on('zoom', (event) => {
				g.attr('transform', event.transform);
			});

		svgSelection.call(zoom);

		// Create simulation
		simulation = d3Force
			.forceSimulation<GraphNode>(visibleNodes as GraphNode[])
			.force(
				'link',
				d3Force
					.forceLink<GraphNode, GraphEdge>(visibleEdges as GraphEdge[])
					.id((d) => d.slug)
					.distance(100)
			)
			.force('charge', d3Force.forceManyBody().strength(-200))
			.force('center', d3Force.forceCenter(width / 2, height / 2))
			.force('collision', d3Force.forceCollide().radius((d) => getNodeRadius(d as GraphNode) + 5));

		// Create edges
		const links = g
			.append('g')
			.attr('class', 'links')
			.selectAll('line')
			.data(visibleEdges)
			.join('line')
			.attr('stroke', '#374151')
			.attr('stroke-opacity', 0.6)
			.attr('stroke-width', 1);

		// Create node groups
		const nodeGroups = g
			.append('g')
			.attr('class', 'nodes')
			.selectAll('g')
			.data(visibleNodes)
			.join('g')
			.attr('class', 'node-group')
			.style('cursor', 'pointer')
			.on('click', (event, d) => {
				window.location.href = `/${d.slug}`;
			});

		// Add drag behavior
		const drag = d3Drag
			.drag<SVGGElement, GraphNode>()
			.on('start', (event, d) => {
				if (!event.active) simulation.alphaTarget(0.3).restart();
				d.fx = d.x;
				d.fy = d.y;
			})
			.on('drag', (event, d) => {
				d.fx = event.x;
				d.fy = event.y;
			})
			.on('end', (event, d) => {
				if (!event.active) simulation.alphaTarget(0);
				d.fx = null;
				d.fy = null;
			});

		nodeGroups.call(drag);

		// Add circles or icons for each node
		nodeGroups.each(function (d) {
			const group = d3Selection.select(this);
			const radius = getNodeRadius(d);

			if (d.icon) {
				// For tech nodes with icons, render the SVG icon
				group
					.append('circle')
					.attr('r', radius)
					.attr('fill', '#1f2937')
					.attr('stroke', getNodeColor(d))
					.attr('stroke-width', 2);

				// Add icon as foreignObject
				group
					.append('foreignObject')
					.attr('x', -radius * 0.6)
					.attr('y', -radius * 0.6)
					.attr('width', radius * 1.2)
					.attr('height', radius * 1.2)
					.append('xhtml:div')
					.attr('class', 'icon-container')
					.style('width', '100%')
					.style('height', '100%')
					.style('display', 'flex')
					.style('align-items', 'center')
					.style('justify-content', 'center')
					.html(d.icon);
			} else {
				// Regular colored circle
				group.append('circle').attr('r', radius).attr('fill', getNodeColor(d));
			}

			// Add hover effect
			group
				.on('mouseenter', function () {
					d3Selection.select(this).select('circle').attr('stroke', '#f97316').attr('stroke-width', 3);
					// Highlight connected edges
					links
						.attr('stroke', (l) =>
							(l.source as GraphNode).slug === d.slug || (l.target as GraphNode).slug === d.slug
								? '#f97316'
								: '#374151'
						)
						.attr('stroke-width', (l) =>
							(l.source as GraphNode).slug === d.slug || (l.target as GraphNode).slug === d.slug
								? 2
								: 1
						);
				})
				.on('mouseleave', function () {
					d3Selection.select(this).select('circle').attr('stroke', d.icon ? getNodeColor(d) : null).attr('stroke-width', d.icon ? 2 : 0);
					links.attr('stroke', '#374151').attr('stroke-width', 1);
				});
		});

		// Add labels
		nodeGroups
			.append('text')
			.text((d) => d.name)
			.attr('text-anchor', 'middle')
			.attr('dy', (d) => getNodeRadius(d) + 14)
			.attr('fill', '#9ca3af')
			.attr('font-size', '10px')
			.attr('pointer-events', 'none');

		// Update positions on tick
		simulation.on('tick', () => {
			links
				.attr('x1', (d) => (d.source as GraphNode).x!)
				.attr('y1', (d) => (d.source as GraphNode).y!)
				.attr('x2', (d) => (d.target as GraphNode).x!)
				.attr('y2', (d) => (d.target as GraphNode).y!);

			nodeGroups.attr('transform', (d) => `translate(${d.x},${d.y})`);
		});
	}

	function handleFilterChange(filters: string[]) {
		activeFilters = filters;
	}

	onMount(() => {
		// Set initial dimensions
		if (container) {
			width = container.clientWidth;
			height = Math.max(500, window.innerHeight - 200);
		}

		initSimulation();

		// Handle resize
		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				width = entry.contentRect.width;
				height = Math.max(500, window.innerHeight - 200);
				initSimulation();
			}
		});

		if (container) {
			resizeObserver.observe(container);
		}

		return () => {
			resizeObserver.disconnect();
			if (simulation) simulation.stop();
		};
	});

	// Re-initialize when filters change
	$effect(() => {
		if (svg && visibleNodes.length > 0) {
			initSimulation();
		}
	});
</script>

<div class="graph-container" bind:this={container}>
	<GraphControls {activeFilters} onFilterChange={handleFilterChange} />

	<svg bind:this={svg} {width} {height} class="graph-svg"></svg>

	<div class="graph-legend">
		<div class="legend-item">
			<span class="legend-dot" style="background: #f97316;"></span>
			<span>Projects</span>
		</div>
		<div class="legend-item">
			<span class="legend-dot" style="background: #22c55e;"></span>
			<span>Technology</span>
		</div>
		<div class="legend-item">
			<span class="legend-dot" style="background: #8b5cf6;"></span>
			<span>Hobbies</span>
		</div>
	</div>
</div>

<style lang="postcss">
	.graph-container {
		position: relative;
		width: 100%;
		min-height: 500px;
		background: theme(colors.gray.950);
		border-radius: theme(borderRadius.lg);
		overflow: hidden;
	}

	.graph-svg {
		display: block;
	}

	.graph-legend {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.75rem;
		background: rgba(17, 24, 39, 0.9);
		border-radius: theme(borderRadius.md);
		font-size: 0.75rem;
		color: theme(colors.gray.400);
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.legend-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	:global(.icon-container svg) {
		width: 100%;
		height: 100%;
		fill: theme(colors.gray.300);
	}

	:global(.node-group:hover .icon-container svg path) {
		fill: url(#Gradient1);
	}
</style>
