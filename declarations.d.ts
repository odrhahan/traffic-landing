declare module '*.svg' {
	const content: React.FC<React.SVGProps<SVGSVGElement>>;
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}
