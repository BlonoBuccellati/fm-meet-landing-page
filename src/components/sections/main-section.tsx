import Image, { type StaticImageData } from "next/image";

import {
  imageManTexting,
  imageMenInMeeting,
  imageWomanInVideoCall,
  imageWomenInVideoChatting,
} from "@/assets";
import Number from "@/components/number";

interface UserImageProps {
  alt: string;
  src: StaticImageData;
}
const UserImage = ({ alt, src }: UserImageProps) => {
  return <Image alt={alt} src={src} className="h-fit rounded-xl" />;
};
const SectionImages = () => {
  return (
    <div className="tablet:grid-cols-4 mx-auto grid grid-cols-2 gap-200">
      <UserImage alt="woman in video call" src={imageWomanInVideoCall} />
      <UserImage
        alt="women in video chatting"
        src={imageWomenInVideoChatting}
      />
      <UserImage alt="men in meeting" src={imageMenInMeeting} />
      <UserImage alt="man in texting" src={imageManTexting} />
    </div>
  );
};

const SectionText = () => {
  return (
    <div className="mx-auto max-w-[31.5rem] space-y-400 text-center">
      <div className="mx-auto max-w-[27.8125rem] space-y-200">
        <div className="typo-overline text-cyan-600 uppercase">
          Built for modern use
        </div>
        <h1 className="typo-heading-lg text-slate-900">
          Smarter meetings, all in one place
        </h1>
      </div>
      <p className="typo-button font-medium text-slate-600">
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </div>
  );
};

const MainSection = () => {
  return (
    <section className="space-y-800 px-400 pt-400 pb-800">
      <Number num={1} className="mx-auto w-fit" />
      <SectionImages />
      <SectionText />
    </section>
  );
};

export default MainSection;
