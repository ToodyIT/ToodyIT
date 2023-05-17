type our-team.pageProps = {

}

export const our-team.page: FC<our-team.pageProps> = ({  }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: false }),
    ]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev();
            emblaApi.plugins().autoplay?.reset();
        }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext();
            emblaApi.plugins().autoplay?.reset();
        }
    }, [emblaApi]);
    return (
        <div>
            
        </div>
    );
};
