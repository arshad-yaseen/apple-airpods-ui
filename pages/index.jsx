import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import DancingSection from "../components/DancingSection";
import AudioPerfomanceSection from "../components/AudioPerfomanceSection";
import NoiceCancellationSection from "../components/NoiceCancellationSection";
import NoiseOverviewSection from "../components/NoiseOverviewSection";
import BentoSection from "../components/BentoSection";
import XraySection from "../components/XraySection";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {


    useEffect(()=> {
        let data_scroll_container = document.querySelector(
          "[data-scroll-container]"
        );
        
        import("locomotive-scroll").then((locomotiveModule) => {
          if (!data_scroll_container) return;
          const scroll = new locomotiveModule.default({
            el: data_scroll_container,
            smooth: true,
            smoothMobile: false,
            multiplier: 0.5,
          });
        });

    },[])

  return (
    <>
      <Head>
        <title>AirPods Pro (2nd generation) - Apple</title>
        <meta
          name="description"
          content="AirPods Pro (2nd generation). Richer audio quality, up to 2x more Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://www.apple.com/v/airpods-pro/g/images/meta/og__eui2mpgzwyaa_overview.png?202303151555"
        />
        <meta property="og:title" content="AirPods Pro (2nd generation)" />
        <meta
          property="og:description"
          content="AirPods Pro (2nd generation). Richer audio quality, up to 2x more Active Noise Cancellation, Adaptive Transparency, and Personalized Spatial Audio."
        />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
        />
      </Head>
      <main  >

          <Header />
          <Hero />
          <DancingSection />
          <AudioPerfomanceSection />
          <BentoSection />
          <XraySection />
          <NoiceCancellationSection />
          <NoiseOverviewSection />
          <Footer />

      </main>
    </>
  );
}
