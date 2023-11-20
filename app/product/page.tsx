import { title } from "@/components/primitives";
import Product from "@/pages/Product/product";

export default function ProductPage() {
	return (
		<div>
			<h1 className={title()}>
				<Product/>
			</h1>
		</div>
	);
}
