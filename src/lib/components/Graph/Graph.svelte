<script lang="ts">
	import { onMount } from 'svelte';
	import * as d3Force from 'd3-force';
	import * as d3Selection from 'd3-selection';
	import * as d3Zoom from 'd3-zoom';
	import * as d3Drag from 'd3-drag';
	import type { Graph, GraphNode, GraphEdge } from '$lib/data/graph';

	interface Props {
		graph: Graph;
	}

	let { graph }: Props = $props();

	// Use all nodes and edges (no filtering for now)
	let visibleNodes = $derived(graph.nodes);
	let visibleEdges = $derived(graph.edges);

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

	// Node sizes based on growth stage
	const growthSizes: Record<string, number> = {
		seedling: 10,
		budding: 16,
		evergreen: 22
	};

	function getNodeRadius(node: GraphNode): number {
		const baseSize = growthSizes[node.growth] || 10;
		// Slightly larger for nodes with icons to fit them
		if (node.icon) return Math.max(baseSize, 18);
		return baseSize;
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

	onMount(() => {
		// Set initial dimensions from container
		if (container) {
			width = container.clientWidth;
			height = container.clientHeight;
		}

		initSimulation();

		// Handle resize
		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				width = entry.contentRect.width;
				height = entry.contentRect.height;
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

</script>

<div class="graph-container" bind:this={container}>
	<svg bind:this={svg} viewBox="0 0 {width} {height}" class="graph-svg"></svg>
</div>

<style lang="postcss">
	.graph-container {
		position: relative;
		width: 100%;
		height: 100%;
		min-height: 0;
	}

	.graph-svg {
		display: block;
		width: 100%;
		height: 100%;
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
