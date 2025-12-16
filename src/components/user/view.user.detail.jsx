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
            <Drawer title="Chi tiet user" open={isDetailOpen} width={"40vw"}
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
                        <br />
                        <p>Avatar: </p>
                        <div>
                            <img width={150}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                        </div>

                        <div>
                            <label htmlFor='btnUpload'
                                style={{
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    backgroundColor: "orange",
                                    borderRadius: "5px",
                                    cursor: "pointer"
                                }}
                            >
                                Upload Avatar
                            </label>
                            <input type='file' hidden id='btnUpload' />
                        </div>

                        {/* <Button type='primary'>Upload Avatar</Button> */}
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