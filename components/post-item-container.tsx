import Image from "next/image";

export default function PostItemContainer() {
  return (
    <Image
      quality={100}
      width={585}
      height={585}
      alt="pic"
      src={
        "https://s1.aigei.com/src/img/jpg/88/883f9f9c8dfd4f8b99cc8abe8c997333.jpg?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:UvSsaPJ453FbKHB7XmV-aIOoww8="
      }
    />
  );
}
