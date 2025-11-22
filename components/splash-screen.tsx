"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="flex flex-col items-center justify-between min-h-screen py-4">
      <span />
      <Image
        src="/instagram-splash-logo.svg"
        alt="logo"
        width={72}
        height={72}
      />
      <div className="text-sm p-4 text-gray-500 max-w-md  leading-relaxed">
        <p>
          本内容仅供 <strong>学习、研究与技术交流</strong>{" "}
          使用，旨在帮助读者提升对相关技术的理解。
        </p>
        <p>
          请勿将其中的信息或技术用于任何 <strong>非法用途</strong>
          ，包括但不限于未授权的测试、攻击、入侵、数据获取或其他违法行为。
        </p>
        <p>使用者需自行确保其行为符合当地法律法规及平台政策。</p>
        <p>因不当使用本内容而造成的任何后果，作者概不负责。</p>
      </div>
    </div>
  ) : (
    children
  );
}
