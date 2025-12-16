import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    } = props;

    return (
        <>
            <Drawer title="Chi tiet user" open={isDetailOpen}
                onClose={() => {
                    setDataDetail(null);
                    setIsDetailOpen(false);
                }}
            >
                {dataDetail ?
                    <>
                        <p>Id: {dataDetail._id}</p>
                        <br />
                        <p>Full name: {dataDetail.fullName}</p>
                        <br />
                        <p>Email: {dataDetail.email}</p>
                        <br />
                        <p>Phone number: {dataDetail.phone}</p>
                    </>

                    :

                    <>
                        <p>Khong co du lieu</p>
                    </>
                }
            </Drawer >
        </>
    )
}

export default ViewUserDetail;