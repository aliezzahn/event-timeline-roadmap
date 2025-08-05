"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CustomCurvedArrow } from "./custom-curved-arrow";

const Component: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const step1ImageRef = useRef<HTMLDivElement>(null);
  const step2TextRef = useRef<HTMLDivElement>(null);
  const step2SectionRef = useRef<HTMLDivElement>(null);
  const step2DescriptionsRef = useRef<HTMLDivElement>(null);
  const step2ImageRef = useRef<HTMLDivElement>(null);
  const step3ImageRef = useRef<HTMLDivElement>(null);
  const step3TextRef = useRef<HTMLDivElement>(null);
  const step2RegisterBtnRef = useRef<HTMLDivElement>(null);

  // Handle responsive layout detection
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth >= 640 && window.innerWidth <= 768) {
          setIsMobile(false);
          setIsTablet(true);
        } else if (window.innerWidth < 640) {
          setIsMobile(true);
          setIsTablet(false);
        } else {
          setIsMobile(false);
          setIsTablet(false);
        }
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen mx-auto max-w-7xl py-16">
      <div className="min-h-screen container lg:mx-auto text-[#ffffff] overflow-hidden">
        <div className="lg:container relative">
          {/* Step 1 - Connect Your Wallet */}
          <section className="relative">
            <div className="mx-auto">
              <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="py-6 inline-flex items-center rounded-underline rounded-full text-xl sm:text-3xl font-medium">
                    Step 1 &nbsp;&nbsp;
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat..
                  </p>
                  <Button className="cursor-pointer bg-foreground  rounded-full px-4 xl:px-6 py-2 font-semibold transition-all duration-300  focus:ring-2 focus:ring-[#A259FF] focus:ring-offset-2 focus:ring-offset-transparent text-sm sm:text-base">
                    Sed do eiusmod
                  </Button>
                </div>
                <div className="relative flex justify-center">
                  <div ref={step1ImageRef} className="relative">
                    <Image
                      src="/images/aspect.jpeg"
                      alt="Crypto wallet connection interface"
                      width={460}
                      height={560}
                      className="max-w-[280px] sm:max-w-[560px] h-auto rounded-full mb-4"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Arrow Container - Step 1 to Step 2 */}
          <div className="relative h-32 md:h-52 lg:h-48">
            <CustomCurvedArrow
              startElement={step1ImageRef}
              endElement={step2TextRef}
              startPosition="bottom"
              endPosition={!isTablet && !isMobile ? "right" : "top"}
              curveIntensity={0.6}
              curveType={!isTablet && !isMobile ? "elegant" : "spiral"}
              curveDirection={!isTablet && !isMobile ? "right" : "left"}
              strokeWidth={!isTablet && !isMobile ? 15 : 7}
              arrowSize={!isTablet && !isMobile ? 30 : 20}
            />
          </div>

          {/* Step 2 */}
          <section ref={step2SectionRef} className="relative">
            <div className="mx-auto">
              <div className="text-center">
                <div
                  ref={step2TextRef}
                  className="mr-4 py-6 inline-flex items-center rounded-underline rounded-full text-xl sm:text-3xl font-medium"
                >
                  &nbsp;&nbsp; Step 2 &nbsp;&nbsp;
                </div>
              </div>
              <div className="relative flex justify-center z-40">
                <div ref={step2ImageRef} className="relative">
                  <Image
                    src="/images/aspect.jpeg"
                    alt="Provider registration dashboard"
                    width={460}
                    height={560}
                    className="max-w-[280px] sm:max-w-[560px] h-auto rounded-full"
                    priority
                  />
                </div>
              </div>
              <div
                ref={step2DescriptionsRef}
                className="w-fit text-center mx-auto !z-50"
              >
                <h3 className="text-2xl sm:text-4xl font-bold mb-4">
                  Lorem ipsum dolor sit amet
                </h3>
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div ref={step2RegisterBtnRef} className="pb-4 lg:pb-0">
                  <Button
                    style={{ zIndex: 9999 }}
                    className="cursor-pointer bg-foreground rounded-full px-4 xl:px-6 py-2 font-semibold transition-all duration-300  focus:ring-2 focus:ring-[#A259FF] focus:ring-offset-2 focus:ring-offset-transparent text-sm sm:text-base !z-50"
                  >
                    Sed do eiusmod
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Arrow Container - Step 2 to Step 3 - SHORTEST PATH */}
          <div
            className="relative h-32 md:h-40 lg:h-80 overflow-visible"
            style={{ zIndex: 1 }}
          >
            <CustomCurvedArrow
              startElement={
                !isTablet && !isMobile ? step2ImageRef : step2DescriptionsRef
              }
              endElement={step3TextRef}
              obstacleElement={
                !isTablet && !isMobile ? step2DescriptionsRef : null
              }
              startPosition={!isTablet && !isMobile ? "left" : "bottom"}
              endPosition={!isTablet && !isMobile ? "top" : "right"}
              curveIntensity={1.0}
              curveType={!isTablet && !isMobile ? "s-curve" : "elegant"}
              curveDirection={!isTablet && !isMobile ? "left" : "right"}
              strokeWidth={!isTablet && !isMobile ? 20 : 7}
              arrowSize={!isTablet && !isMobile ? 50 : 20}
            />
          </div>

          {/* Step 3 - Integrate with Your Sales Infrastructure */}
          <section className="relative">
            <div className="mx-auto lg:mt-16">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-32">
                <div className="relative flex justify-center lg:justify-start">
                  <div
                    ref={step3ImageRef}
                    className="relative flex justify-center"
                  >
                    <Image
                      src="/images/aspect.jpeg"
                      alt="Sales infrastructure dashboard"
                      width={460}
                      height={560}
                      className="max-w-[280px] sm:max-w-[560px] h-auto rounded-full"
                      priority
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div
                    ref={step3TextRef}
                    className="py-6 inline-flex items-center rounded-underline rounded-full text-xl sm:text-3xl font-medium"
                  >
                    Step 3 &nbsp;&nbsp;
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <Button className="cursor-pointer bg-foreground  rounded-full px-4 xl:px-6 py-2 font-semibold transition-all duration-300  focus:ring-2 focus:ring-[#A259FF] focus:ring-offset-2 focus:ring-offset-transparent text-sm sm:text-base">
                    Sed do eiusmod
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Component;
