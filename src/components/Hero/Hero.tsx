type HeroProps = {
    title?: string,
    body?: string
}

export default function Hero ({ title, body }: HeroProps) {
    return (
        <section>
            <h1>{title}</h1>
            { body }
        </section>
    )
}