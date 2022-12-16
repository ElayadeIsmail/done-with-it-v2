import {
    Categories,
    GetStarted,
    Hero,
    Services,
    Stats,
    Testimonials,
} from '~/components/Home';

export default function Index() {
    return (
        <>
            <Hero />
            <Categories />
            <Services />
            <Stats />
            <Testimonials />
            <GetStarted />
        </>
    );
}
