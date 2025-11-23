import PostCommentItem from "@/components/post-comment-item";
import { Modal } from "./modal";
import PostItemHeader from "@/components/post-item-header";
import Image from "next/image";
import PostItemInteractions from "@/components/post-item-interactions";
import PostCommentFooter from "@/components/post-comment-footer";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return (
    <Modal>
      <div className="flex flex-col sm:flex-row sm:max-h-[30vh] md:max-h-[50vh] lg:max-h-[70vh] xl:max-h-[90vh] ">
        {/* 移动端：Header */}
        <div className="sm:hidden">
          <PostItemHeader />
        </div>

        {/* 左侧图片区域  */}
        <div className="sm:w-[40%] flex-1 bg-black">
          <Image
            quality={100}
            width={931}
            height={931}
            alt="pic"
            className="object-contain w-full h-full"
            src={
              "https://s1.aigei.com/src/img/jpg/88/883f9f9c8dfd4f8b99cc8abe8c997333.jpg?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/%7CimageView2/2/w/282&e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:UvSsaPJ453FbKHB7XmV-aIOoww8="
            }
          />
        </div>

        <div className="hidden sm:flex sm:flex-col sm:w-[60%] md:w-[405px]  xl:w-[505px]">
          <div className="border-b">
            <PostItemHeader />
          </div>
          <div className="flex flex-col gap-4 p-4 overflow-auto">
            <PostCommentItem />
            <PostCommentItem />
            <PostCommentItem />
            <PostCommentItem />
            <PostCommentItem />
          </div>
          <div className="hidden sm:block border-t">
            <PostItemInteractions />
          </div>
          <div className="hidden sm:block border-t">
            <PostCommentFooter />
          </div>
        </div>
      </div>
    </Modal>
  )
}

