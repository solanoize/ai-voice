import Image from "next/image";

export default function HomeTrusted() {
  return (
    <div className="flex justify-between gap-4">
      <Image
        loader={() => "https://vapi.ai/assets/mindtickle-4ab4ee79.png"}
        width={813}
        height={137}
        src={"https://vapi.ai/assets/mindtickle-4ab4ee79.png"}
        alt="Mind Tickle"
      />
      <Image
        loader={() => "https://vapi.ai/assets/mindtickle-4ab4ee79.png"}
        width={813}
        height={137}
        src={"https://vapi.ai/assets/mindtickle-4ab4ee79.png"}
        alt="Mind Tickle"
      />
      <Image
        loader={() => "https://vapi.ai/assets/mindtickle-4ab4ee79.png"}
        width={813}
        height={137}
        src={"https://vapi.ai/assets/mindtickle-4ab4ee79.png"}
        alt="Mind Tickle"
      />
      {/* <img src="https://vapi.ai/assets/mindtickle-4ab4ee79.png" />
      <img src="https://vapi.ai/assets/hyperbound-6abba313.png" />
      <img src="https://vapi.ai/assets/mindtickle-4ab4ee79.png" />
      <img src="https://vapi.ai/assets/mindtickle-4ab4ee79.png" /> */}
    </div>
  );
}
