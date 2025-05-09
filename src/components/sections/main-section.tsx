import Image from "next/image";
import {
  imageManTexting,
  imageMenInMeeting,
  imageWomanInVideoCall,
  imageWomenInVideoChatting,
} from "@/assets";
import Number from "@/components/number";

const SectionNumber = () => {
  return (
    <div className="mx-auto w-fit">
      <Number num={1} />
    </div>
  );
};
const SectionImages = () => {
  return (
    <div className="grid grid-cols-2 gap-200">
      <Image
        alt="woman in video call"
        src={imageWomanInVideoCall}
        className="rounded-xl"
      />
      <Image
        alt="women in video chatting"
        src={imageWomenInVideoChatting}
        className="rounded-xl"
      />
      <Image
        alt="men in meeting"
        src={imageMenInMeeting}
        className="rounded-xl"
      />
      <Image
        alt="man in texting"
        src={imageManTexting}
        className="rounded-xl"
      />
    </div>
  );
};

const SectionText = () => {
  return (
    <div className="space-y-400 text-center">
      <div className="space-y-200">
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
      <SectionNumber />
      <SectionImages />
      <SectionText />
    </section>
  );
};

export default MainSection;
