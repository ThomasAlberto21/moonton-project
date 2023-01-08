import ValidationErrors from "@/Components/ValidationErrors";
import Authenticated from "@/Layouts/Authenticated/index";
import InputLabel from "@/Components/InputLabel";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import { Head, useForm } from "@inertiajs/inertia-react";
import Button from "@/Components/Button";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin Create - Movie" />

            <h3 className="text-xl font-bold">Insert A New Movie</h3>
            <hr className="mb-6" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                {/* Name */}
                <InputLabel
                    forInput="name"
                    value="Name"
                    className={`font-bold mb-2`}
                />
                <Input
                    type="text"
                    name="name"
                    className=" outline outline-1 outline-[#FB6908] bg-transparent"
                    handleChange={onHandleChange}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                />

                {/* Category */}
                <InputLabel
                    forInput="category"
                    value="Category"
                    className={`font-bold mb-2  mt-4`}
                />
                <Input
                    type="text"
                    name="category"
                    className=" outline outline-1 outline-[#FB6908] bg-transparent"
                    handleChange={onHandleChange}
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                />

                {/* video url */}
                <InputLabel
                    forInput="video_url"
                    value="Video Url"
                    className={`font-bold mb-2  mt-4`}
                />
                <Input
                    type="url"
                    name="video_url"
                    className=" outline outline-1 outline-[#FB6908] bg-transparent"
                    handleChange={onHandleChange}
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                />

                {/* thumbnail */}
                <InputLabel
                    forInput="thumbnail"
                    value="Thumbnail"
                    className={`font-bold mb-2  mt-4`}
                />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    className="bg-transparent"
                    handleChange={onHandleChange}
                    placeholder="Insert thumbnail of the movie"
                    isError={errors.thumbnail}
                />

                {/* rating */}
                <InputLabel
                    forInput="rating"
                    value="Rating"
                    className={`font-bold mb-2  mt-4`}
                />
                <Input
                    type="number"
                    name="rating"
                    className=" outline outline-1 outline-[#FB6908] bg-transparent"
                    handleChange={onHandleChange}
                    placeholder="Enter the rating of the movie"
                    isError={errors.rating}
                />

                <div className="flex flex-row mt-4 items-center">
                    <InputLabel
                        forInput="is_featured"
                        value="Is Featured"
                        className={`font-bold mr-3 mt-1`}
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <Button type="submit" className="mt-10" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
