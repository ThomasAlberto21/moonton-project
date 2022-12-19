import Authenticated from "@/Layouts/Authenticated/index";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <Authenticated />;
        </>
    );
}
