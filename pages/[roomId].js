import { useRouter } from "next/router"
import { Fragment } from "react";

export default function RoomDetailPage() {

    const router = useRouter();
    const { roomId } = router.query;

    return (
        <Fragment>

        </Fragment>
    )
}

// export function getServerSideProps(context) {

//     const { params } = context;

//     const roomId = params.slug;

//     return {
//         props: {

//         }
//     }
// }