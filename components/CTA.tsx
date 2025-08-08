import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge">Your well-being, your way.</div>
            <h2 className="text-3xl font-bold">
                Build and personalize your mental health companion
            </h2>
            <p>Pick a name, focus area, voice, and style — then start supportive, real-time voice check-ins that feel natural and safe.</p>
            <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
                <Link href="/companions/new">
                    <p>Build a New Support Companion</p>
                </Link>
            </button>
        </section>
    )
}
export default Cta
