import { Category } from "../../components/blog";
import Layout from "../layout";

export default function Blog() {
  return (
    <Layout>
      <div className="py-24 px-[2rem] md:px-[10rem]">
        <h2 className="text-2xl font-bold">Category</h2>
        <Category />
      </div>
    </Layout>
  );
}
