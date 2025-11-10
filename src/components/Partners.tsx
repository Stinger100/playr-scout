import Image from "next/image"

export default function Partners() {
    const PartnersLogo = [
        {
            src: '/partners/realmadrid.png', 
            alt:"real madrid logo"
        },
        {
            src: '/partners/mancity.png', 
            alt:"man city logo"
        },
        {
            src: '/partners/fcbarcelona.png', 
            alt:"fc barcelona logo"
        },
        {
            src: '/partners/fcbayern.png', 
            alt:"fc bayern logo"
        },
        {
            src: '/partners/liverpool.png', 
            alt:"liverpool logo"
        },
        {
            src: '/partners/psg.png', 
            alt:"psg logo"
        },
          {
            src: '/partners/manutd.png', 
            alt:"man utd logo"
        },
    ]
    return (
        <section className="py-8">
            <h2 className="text-tertiary text-center mb-4">Trusted by leading clubs within Europe</h2>
         <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
      {PartnersLogo.map((partner, index) => (
        <div
          key={index}
          className="relative h-[48px] w-[100px] sm:h-[60px] sm:w-[120px] flex items-center justify-center grayscale hover:grayscale-0 transition"
        >
          <Image
            src={partner.src}
            alt={partner.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px, 120px"
          />
        </div>
      ))}
            </div>
    </section>
    )
}