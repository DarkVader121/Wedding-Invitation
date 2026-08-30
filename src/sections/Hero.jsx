import heroImage from '../assets/images/background/hero-background.png'
import { useState } from "react";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            {/* Offcanvas Open button */}
            <a className='btn btn-primary ms-5' onClick={() => setIsOpen(true)} style={{ backgroundColor: '#6c849c' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="size-8">
                    <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                    <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                </svg>
            </a>
        </section>

        {/* Overlay */}
        <div
            onClick={() => setIsOpen(false)}
            className={`
                fixed inset-0 z-40 bg-black/50
                transition-opacity duration-300
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
        />

        {/* Offcanvas */}
        <div
            className={`
                fixed top-0 left-0 z-50
                h-screen  w-[90%]
                bg-white shadow-xl

                transform
                transition-transform duration-300 ease-in-out

                ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            {/* Header */}
            <section className='h-full overflow-y-scroll'>
                <div className="container">
                    <a className='btn btn-primary' onClick={() => setIsOpen(false)} style={{ backgroundColor: '#6c849c' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </a>


                    <div className='flex justify-between align-start'>
                        <p className="mt-7 text-2xl">Upload Memories</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-secondary mt-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                        </svg>

                    </div>
               
                    <p className="mt-3">
                        morning moments to the last dance under the string lights, every memory here was made possible by the people.
                    </p>

                   <a className='active-state mt-5 relative flex flex-col justify-center items-center w-[100%] h-[170px] bg-gray-100 rounded-xl'>
                        <span className='absolute top-2 left-2 w-5 h-5 border-t-[3px] border-l-[3px] border-slate-700 rounded-tl-md'></span>
                        <span className='absolute top-2 right-2 w-5 h-5 border-t-[3px] border-r-[3px] border-slate-700 rounded-tr-md'></span>
                        <span className='absolute bottom-2 left-2 w-5 h-5 border-b-[3px] border-l-[3px] border-slate-700 rounded-bl-md'></span>
                        <span className='absolute bottom-2 right-2 w-5 h-5 border-b-[3px] border-r-[3px] border-slate-700 rounded-br-md'></span>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                        </svg>
                        <p className='mt-3'>Slip your photo into this place</p>
                        <p className='text-xs !text-secondary'>PNG, JPG, PDF, GIF, SVG</p>
                    </a>

                     <div className="wi-gallery-images  gap-3 mt-5 grid grid-cols-3 justify-center items-start">
                        <a className="fade-in show">
                            <img
                                src="https://media.istockphoto.com/id/2090025382/photo/the-man-gently-holds-the-brides-hand-with-a-beautiful-golden-wedding-ring-enlarged-image-of.jpg?s=612x612&w=0&k=20&c=MtEDI1zyEWDGyAD6VyrsviEvKiwjhzsSxIRyAs-Luz4="
                                alt={`Prenup`}
                            />
                        </a>
                        <a className="fade-in show">
                            <img
                                src="https://media.istockphoto.com/id/2090025382/photo/the-man-gently-holds-the-brides-hand-with-a-beautiful-golden-wedding-ring-enlarged-image-of.jpg?s=612x612&w=0&k=20&c=MtEDI1zyEWDGyAD6VyrsviEvKiwjhzsSxIRyAs-Luz4="
                                alt={`Prenup`}
                            />
                        </a>
                        <a className="fade-in show">
                            <img
                                src="https://media.istockphoto.com/id/2090025382/photo/the-man-gently-holds-the-brides-hand-with-a-beautiful-golden-wedding-ring-enlarged-image-of.jpg?s=612x612&w=0&k=20&c=MtEDI1zyEWDGyAD6VyrsviEvKiwjhzsSxIRyAs-Luz4="
                                alt={`Prenup`}
                            />
                        </a>
                        <a className="fade-in show">
                            <img
                                src="https://media.istockphoto.com/id/2090025382/photo/the-man-gently-holds-the-brides-hand-with-a-beautiful-golden-wedding-ring-enlarged-image-of.jpg?s=612x612&w=0&k=20&c=MtEDI1zyEWDGyAD6VyrsviEvKiwjhzsSxIRyAs-Luz4="
                                alt={`Prenup`}
                            />
                        </a>
                        <a className="fade-in show">
                            <img
                                src="https://media.istockphoto.com/id/2090025382/photo/the-man-gently-holds-the-brides-hand-with-a-beautiful-golden-wedding-ring-enlarged-image-of.jpg?s=612x612&w=0&k=20&c=MtEDI1zyEWDGyAD6VyrsviEvKiwjhzsSxIRyAs-Luz4="
                                alt={`Prenup`}
                            />
                        </a>
                        <a className="fade-in show">
                            <img
                                src="https://media.istockphoto.com/id/2090025382/photo/the-man-gently-holds-the-brides-hand-with-a-beautiful-golden-wedding-ring-enlarged-image-of.jpg?s=612x612&w=0&k=20&c=MtEDI1zyEWDGyAD6VyrsviEvKiwjhzsSxIRyAs-Luz4="
                                alt={`Prenup`}
                            />
                        </a>
                        <a className="fade-in show">
                            <img
                                src="https://media.istockphoto.com/id/2090025382/photo/the-man-gently-holds-the-brides-hand-with-a-beautiful-golden-wedding-ring-enlarged-image-of.jpg?s=612x612&w=0&k=20&c=MtEDI1zyEWDGyAD6VyrsviEvKiwjhzsSxIRyAs-Luz4="
                                alt={`Prenup`}
                            />
                        </a>
                     </div>

                    <a className='mt-7 btn btn-primary'>
                        Request to Display in Gallery
                    </a>
                </div>
            </section>
        </div>
      </>
    );
}

export default Hero;