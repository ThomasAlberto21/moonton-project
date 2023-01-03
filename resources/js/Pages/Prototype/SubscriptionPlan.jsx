import Authenticated from "@/Layouts/Authenticated/index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import {Head} from '@inertiajs/inertia-react'

export default function SubscriptionPlan() {
    return (
        <>
        <Head title="Payments" />
        <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard
                        name="Basic"
                        price={290000}
                        durationInMonth={3}
                        features={["Features 1", "Features 2", "Features 3"]}
                    />

                    <SubscriptionCard
                        isPremium
                        name="Premium"
                        price={900000}
                        durationInMonth={6}
                        features={["Features 1", "Features 2", "Features 3"]}
                    />
                </div>
            </div>
            <div className="ml-[300px] px-[50px]"></div>
        </Authenticated>
        </>
    );
}
