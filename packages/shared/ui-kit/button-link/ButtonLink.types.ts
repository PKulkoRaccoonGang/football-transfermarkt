export interface ButtonLinkProps {
	path?: string;
	variant?: 'success' | 'danger';
	type?: 'link' | 'button';
	onClick?: () => void;
	className?: string;
	hasIcon?: boolean;
  children: React.ReactNode;
	disabled?: boolean;
}
