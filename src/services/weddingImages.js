export const TakePrenupImages = () => {
    const images = import.meta.glob(
        "../assets/images/wedding/prenup/*",
        {
            eager: true,
            query: "?url",
            import: "default",
        }
    );

    return Object.entries(images).map(([path, src]) => ({
        src,
        category: "prenup",
        path,
    }));
};

export const TakeOfficialPhotographyImages = () => {
    const images = import.meta.glob(
        "../assets/images/wedding/official-photography/*",
        {
            eager: true,
            query: "?url",
            import: "default",
        }
    );

    return Object.entries(images).map(([path, src]) => ({
        src,
        category: "official-photography",
        path,
    }));
};