import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <h1>AboutPage</h1>
      {/* 通过nextjs自带的Image组件，可以自动优化图片 */}
      <Image src="/about.png" alt="about" width={100} height={100} />
      {/* <div className="relative w-[500px] h-[500px]">
        <Image
          src="https://images.pexels.com/photos/30008021/pexels-photo-30008021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="引入外部图片 并通过fill属性 使图片填充容器"
          fill
        />
      </div> */}
    </div>
  );
}
