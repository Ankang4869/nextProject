import Image from "next/image";

const HomePage = () => {
  return (
    // 容器
    <div className="flex gap-[100px]">
      {/* 左侧文字容器 */}
      <div className="flex-1 flex flex-col gap-[50px]">
        <h1 className="text-[96px] font-bold">Creative Thoughts Agengy.</h1>
        <p className="text-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        {/* 按钮容器 */}
        <div className="flex gap-[20px]">
          <button className="p-[20px] min-w-[120px] cursor-pointer border-none rounded-[5px] bg-[--btn] text-[--text]">Learn More</button>
          <button className="p-[20px] min-w-[120px] cursor-pointer border-none rounded-[5px]">Contact</button>
        </div>
        {/* 品牌图片容器 */}
        <div className="relative w-[500px] h-[50px]">
          <Image src="/brands.png" alt="brand" fill />
        </div>
      </div>
      {/* 右侧图片容器 */}
      <div className="relative flex-1">
        <Image src="/hero.gif" alt="home" fill />
      </div>
    </div>
  );
};

export default HomePage;
