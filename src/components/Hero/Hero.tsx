type HeroProps = {
    children: any
}

export default function Hero ({children} : HeroProps) {
    return (
        <section className="hero">
            {children}
        </section>
    )
}