import Image from "next/image";
import { Modal } from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return (
    <Modal>
      <div className="flex flex-row w-full">
        <Image
          quality={100}
          width={931}
          height={931}
          alt="pic"
          src={
            "https://s1.aigei.com/src/img/jpg/88/883f9f9c8dfd4f8b99cc8abe8c997333.jpg?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:UvSsaPJ453FbKHB7XmV-aIOoww8="
          }
        />
        <div className="w-[500px] hidden md:block ">{photoId}</div>
      </div>
    </Modal>
  );
}
