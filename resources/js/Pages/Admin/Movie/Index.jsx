import Authenticated from "@/Layouts/Authenticated/index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import { Link, Head, useForm } from "@inertiajs/inertia-react";

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();

    return (
        <Authenticated auth={auth}>
            <Head title="List Of Movie" />
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type="button" className="w-40 mb-8">
                    Insert Your Movie
                </Button>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <table className="w-full table-fixed text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img
                                    src={`/storage/${movie.thumbnail}`}
                                    className="w-32 rounded-md"
                                />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating}</td>
                            <td>
                                <Link
                                    href={route(
                                        "admin.dashboard.movie.edit",
                                        movie.id
                                    )}
                                >
                                    <Button type="button" variant="warning">
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <div
                                    onClick={() => {
                                        movie.deleted_at
                                            ? put(
                                                  route(
                                                      "admin.dashboard.movie.restore",
                                                      movie.id
                                                  )
                                              )
                                            : destroy(
                                                  route(
                                                      "admin.dashboard.movie.destroy",
                                                      movie.id
                                                  )
                                              );
                                    }}
                                >
                                    <Button type="button" variant="danger">
                                        {movie.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
