import Image from "next/image";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function FBlocks(props) {
    const { img1, imgAlt, number, slogan, title, text, buttonLink, targetLink } = props;
    let image, button;
    if (img1 !== undefined) {
        image = <Image src={props.img1} className="h-auto w-full" alt={props.imgAlt}/>
    }
    if (buttonLink !== undefined) {
        button = <Button href={props.buttonLink} target={props.targetLink ?? '_self'} variant="ghost" size="md" className="mt-10 sm:mt-12">
            {props.buttonText ?? 'Learn more'}
        </Button>
    }

  return (
    <section className="relative overflow-hidden bg-vanilla pt-32 pb-20 lg:pt-24 lg:pb-28">
       <Container>
         <div className="relative mx-auto w-full max-w-lg sm:max-w-xl lg:mx-0 lg:max-w-none">
           <div className="left-0 top-1/2 z-10 w-full lg:absolute lg:w-1/2 lg:-translate-y-1/2">
               {image}
             <div className="absolute right-0 top-0 w-64 -translate-y-24 bg-gray-secondary-100/95 p-6 backdrop-blur-sm sm:py-7 lg:left-0 lg:top-[unset] lg:bottom-0 lg:translate-y-24 2xl:-translate-x-16">
               <p className="text-4xl font-semibold text-slate-900 xl:text-5xl">
                 {props.number}
               </p>
               <p className="mt-5 text-slate-700">
                 {props.slogan}
               </p>
             </div>
           </div>
           <div className="w-full border border-gray-secondary-400/60 bg-gray-secondary-50 px-6 py-10 sm:p-14 lg:ml-auto lg:w-7/12 lg:py-32 lg:pl-28 xl:pl-36 xl:pr-20">
             <h2 className="text-4xl font-semibold leading-tight text-slate-900 xl:text-5xl xl:leading-tight">
               {props.title}
             </h2>
             <p className="mt-6 leading-relaxed text-slate-700 sm:mt-8 sm:text-lg sm:leading-8">{props.text}</p>
               {button}
           </div>
         </div>
       </Container>
     </section>
  );
}
