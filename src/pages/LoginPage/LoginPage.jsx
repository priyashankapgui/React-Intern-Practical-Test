import Layout from "@/Components/Layout/Layout";
import LoginForm from "@/section/LoginForm/LoginForm";
import warehouseImage from  "@/assets/images/rb_15026.png"

export default function LoginPage() {
  return (
    <Layout>
      <div className="flex h-full">
        {/*  Image */}
        <div className="flex items-center justify-center w-1/2 pt-0 bg-gradient-to-b from-purple-300 to-white">
        <img src={warehouseImage} alt="Warehouse workers" className="w-2/3 h-auto pt-20" />
        </div>

        {/* LoginForm */}
        <div className="flex flex-col items-center justify-center w-1/2 mt-28">
          <h1 className="mb-8 text-5xl font-bold text-black font-inter">InventeX</h1>
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
}
