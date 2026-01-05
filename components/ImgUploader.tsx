import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const ImgUploader = ({
  getTileImge,
  editableUrl,
}: {
  getTileImge: (url: string) => void;
  editableUrl?: string | null;
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>(() =>
    editableUrl
      ? [
          {
            uid: "-1", // any unique id
            name: "preview.jpg",
            status: "done",
            url: editableUrl, // your existing image URL
          },
        ]
      : []
  );

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList[0]) {
      const file = newFileList[0].originFileObj as File;

      const blobUrl = URL.createObjectURL(file);
      getTileImge(blobUrl);
    }else{
      getTileImge("");
    }


  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        action={undefined}
        customRequest={({ onSuccess }) => {
          if (onSuccess) onSuccess("ok");
        }}
        beforeUpload={() => {
          return false; // This prevents the automatic upload and double triggers
        }}
        onChange={handleChange}
        maxCount={1}
        style={{
          border: "2px dashed rgb(225,225,225,0.5)",
          boxShadow: "0 0 50px 2px rgba(225, 225, 225, 0.2)",
          color: "rgba(225, 225, 225, 0.8)",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          alt=""
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={editableUrl || previewImage}
        />
      )}
    </>
  );
};

export default ImgUploader;
