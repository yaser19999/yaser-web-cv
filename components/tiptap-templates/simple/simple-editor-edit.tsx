"use client";

import * as React from "react";
import { EditorContent, EditorContext, useEditor } from "@tiptap/react";

import dynamic from "next/dynamic";

import toast, { Toaster } from "react-hot-toast";
const notify = () =>
  toast.error("Tile or Thumnail or Tags is missing", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
      border: "2px solid #555",
    },
  });

const Select = dynamic(() => import("react-select"), {
  ssr: false, // ✅ disables server rendering for this component
});

// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit";
import { Image } from "@tiptap/extension-image";

const NoTooltipImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      title: {
        default: null,
        rendered: false, // ❌ do not render title attribute
      },
    };
  },
});

import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Typography } from "@tiptap/extension-typography";
import { Highlight } from "@tiptap/extension-highlight";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { Selection } from "@tiptap/extensions";

// --- UI Primitives ---
import { Button } from "@/components/tiptap-ui-primitive/button";
import { Spacer } from "@/components/tiptap-ui-primitive/spacer";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/components/tiptap-ui-primitive/toolbar";

// --- Tiptap Node ---
import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node/image-upload-node-extension";
import { HorizontalRule } from "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension";
import "@/components/tiptap-node/blockquote-node/blockquote-node.scss";
import "@/components/tiptap-node/code-block-node/code-block-node.scss";
import "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss";
import "@/components/tiptap-node/list-node/list-node.scss";
import "@/components/tiptap-node/image-node/image-node.scss";
import "@/components/tiptap-node/heading-node/heading-node.scss";
import "@/components/tiptap-node/paragraph-node/paragraph-node.scss";

// --- Tiptap UI ---
import { HeadingDropdownMenu } from "@/components/tiptap-ui/heading-dropdown-menu";
import { ImageUploadButton } from "@/components/tiptap-ui/image-upload-button";
import { ListDropdownMenu } from "@/components/tiptap-ui/list-dropdown-menu";
import { BlockquoteButton } from "@/components/tiptap-ui/blockquote-button";
import { CodeBlockButton } from "@/components/tiptap-ui/code-block-button";
import {
  ColorHighlightPopover,
  ColorHighlightPopoverContent,
  ColorHighlightPopoverButton,
} from "@/components/tiptap-ui/color-highlight-popover";
import {
  LinkPopover,
  LinkContent,
  LinkButton,
} from "@/components/tiptap-ui/link-popover";
import { MarkButton } from "@/components/tiptap-ui/mark-button";
import { TextAlignButton } from "@/components/tiptap-ui/text-align-button";
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button";

// --- Icons ---
import { ArrowLeftIcon } from "@/components/tiptap-icons/arrow-left-icon";
import { HighlighterIcon } from "@/components/tiptap-icons/highlighter-icon";
import { LinkIcon } from "@/components/tiptap-icons/link-icon";

// --- Hooks ---
import { useIsMobile } from "@/hooks/use-mobile";
import { useWindowSize } from "@/hooks/use-window-size";
import { useCursorVisibility } from "@/hooks/use-cursor-visibility";

// --- Components ---
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle";

// --- Lib ---
import { handleImageUpload, MAX_FILE_SIZE } from "@/lib/tiptap-utils";

// --- Styles ---
import "@/components/tiptap-templates/simple/simple-editor.scss";

import { Session } from "next-auth";
import ImgUploader from "@/components/ImgUploader";
import Loading from "@/components/Loading";
import { Blogstype } from "@/types/types";
import PostControls from "@/components/PostControls";
import { compressImage } from "@/lib/imgeCompresion";

const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  isMobile,
}: {
  onHighlighterClick: () => void;
  onLinkClick: () => void;
  isMobile: boolean;
}) => {
  return (
    <>
      <Spacer />

      <ToolbarGroup>
        <UndoRedoButton action="undo" />
        <UndoRedoButton action="redo" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
        <ListDropdownMenu
          types={["bulletList", "orderedList", "taskList"]}
          portal={isMobile}
        />
        <BlockquoteButton />
        <CodeBlockButton />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="bold" />
        <MarkButton type="italic" />
        <MarkButton type="strike" />
        <MarkButton type="code" />
        <MarkButton type="underline" />
        {!isMobile ? (
          <ColorHighlightPopover />
        ) : (
          <ColorHighlightPopoverButton onClick={onHighlighterClick} />
        )}
        {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <MarkButton type="superscript" />
        <MarkButton type="subscript" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <TextAlignButton align="left" />
        <TextAlignButton align="center" />
        <TextAlignButton align="right" />
        <TextAlignButton align="justify" />
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup>
        <ImageUploadButton text="Add" />
      </ToolbarGroup>

      <Spacer />

      {isMobile && <ToolbarSeparator />}

      <ToolbarGroup>
        <ThemeToggle />
      </ToolbarGroup>
    </>
  );
};

const MobileToolbarContent = ({
  type,
  onBack,
}: {
  type: "highlighter" | "link";
  onBack: () => void;
}) => (
  <>
    <ToolbarGroup>
      <Button data-style="ghost" onClick={onBack}>
        <ArrowLeftIcon className="tiptap-button-icon" />
        {type === "highlighter" ? (
          <HighlighterIcon className="tiptap-button-icon" />
        ) : (
          <LinkIcon className="tiptap-button-icon" />
        )}
      </Button>
    </ToolbarGroup>

    <ToolbarSeparator />

    {type === "highlighter" ? (
      <ColorHighlightPopoverContent />
    ) : (
      <LinkContent />
    )}
  </>
);

export function SimpleEditorEdit({
  user,
  cont,
  children,
}: {
  user: Session | null;
  cont: Blogstype;
  children?: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  const { height } = useWindowSize();
  const [mobileView, setMobileView] = React.useState<
    "main" | "highlighter" | "link"
  >("main");
  const [title, setTitle] = React.useState(cont.title ?? "");
  const [allTags, setAlltags] = React.useState(cont.tags || []);
  const [tagsTodb, setTagsTodb] = React.useState<object[]>([]);
  const [titleImge, setTitleImge] = React.useState<string>("");
  const [show, setShow] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);

  const getTileImge = (url: string) => {
    setTitleImge(url);
  };

  const toolbarRef = React.useRef<HTMLDivElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
        class: "simple-editor",
      },
    },
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      NoTooltipImage,
      Typography,
      Superscript,
      Subscript,
      Selection,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => {
          toast.error(error.message);
        },
      }),
    ],
    content: cont.content,
  });
  const rect = useCursorVisibility({
    editor,
    overlayHeight: toolbarRef.current?.getBoundingClientRect().height ?? 0,
  });

  React.useEffect(() => {
    editor?.setEditable(showEdit);
  }, [showEdit, editor]);

  React.useEffect(() => {
    if (!isMobile && mobileView !== "main") {
      setMobileView("main");
    }
  }, [isMobile, mobileView]);

  const editeFunc = () => {
    setShowEdit((prev) => !prev);
    editor?.setEditable(showEdit);
    setTagsTodb(cont.tags);
    setTitle(cont.title);
    setAlltags(cont.tags);
    setTitleImge(cont.titleImge);
  };

  //*****data fucntion*********** */
  const data = async () => {
    setShow(true);
    const data = editor?.getJSON();

    // find images inside the editor JSON
    const extractImages = (
      node: any,
      masterName: string,
      arr: string[] = []
    ) => {
      if (!node) return arr;
      if (node.type === "image" && node.attrs?.src.startsWith(masterName)) {
        arr.push(node.attrs.src); // base64 image
      }
      if (node.content) {
        node.content.forEach((child: any) =>
          extractImages(child, masterName, arr)
        );
      }
      return arr;
    };

    const images = extractImages(data, "blob:");

    // ✅ Upload each base64 image to Cloudinary
    const uploadedURLs = await Promise.all(
      images.map(async (src) => {
        // getting the blob file and converting it to a real file & uploading it
        const blob = (await fetch(src).then((res) => res.blob())) as File;
        const file = new File([blob], "photo.jpg", {
          type: blob.type || "image/jpeg",
        });

        const compressedFile = await compressImage(file);

        const formData = new FormData();
        formData.append("imge", compressedFile);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const uploadResult = await res.json();
        return uploadResult.secure_url;
      })
    );

    // ✅ Replace base64 URLs with Cloudinary URLs
    let index = 0;
    const replaceImages = (node: any) => {
      if (!node) return;
      if (node.type === "image" && node.attrs?.src.startsWith("blob:")) {
        node.attrs.src = uploadedURLs[index++]; // replace
      }
      if (node.content) {
        node.content.forEach((child: any) => replaceImages(child));
      }
    };

    replaceImages(data);

    if (titleImge === "" || title === "" || tagsTodb.length === 0) {
      setShow(false);
      notify();
    } else {
      const createFile = async () => {
        if (cont.titleImge !== titleImge) {
          await fetch("/api/upload", {
            method: "DELETE",
            body: JSON.stringify({ titleImge: cont.titleImge }),
            headers: { "Content-Type": "application/json" },
          });
          // getting the blob file and converting it to a real file & uploading it
          const blob = (await fetch(titleImge).then((res) =>
            res.blob()
          )) as File;
          const file = new File([blob], "photo.jpg", {
            type: blob.type || "image/jpeg",
          });
          const compressedFile = await compressImage(file);
          const formData = new FormData();
          formData.append("imge", compressedFile);
          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          }).then((res) => res.json());
          return res;
        } else {
          return cont.titleImge;
        }
      };

      const compareEditedImgs = async () => {
        const afterImgs = extractImages(data, "https://res.cloudinary.com/");
        const beforeImgs = extractImages(
          cont.content,
          "https://res.cloudinary.com/"
        );

        const removedImgs = beforeImgs.filter(
          (img) => !afterImgs.includes(img)
        );
        Promise.all(
          removedImgs.map(async (src) => {
            await fetch("/api/upload", {
              method: "DELETE",
              body: JSON.stringify({ url: src }),
              headers: { "Content-Type": "application/json" },
            });
          })
        );
      };
      await compareEditedImgs();
      const img = (await createFile()) as any;
      fetch("/api/post", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          postId: cont._id,
          titleImge: img.secure_url,
          title: title,
          content: data,
          tags: tagsTodb,
          userId: user?.user?.id,
        }),
      }).then(() => window.location.reload());
    }
  };

  return (
    <div
      className={`simple-editor-wrapper ${
        showEdit ? "" : "bg-radial from-cyan-800 to-[#1d3f58]"
      }   text-white`}
    >
      <div
        className={` relative h-15 bg-${
          showEdit ? "[#0e0e11]" : "transparent"
        } flex justify-center items-center`}
      >
        {user?.user?.email === cont.userEmail && (
          <PostControls
            post={cont}
            setLoading={setShow}
            editeFunc={editeFunc}
          />
        )}

        {children}
      </div>
      <Toaster />
      <Loading show={show} text="Applying chnages please wait" />
      <h1
        className="
    text-center
    text-3xl md:text-4xl lg:text-5xl
    font-semibold tracking-wide
    text-white
    drop-shadow-[0_0_25px_rgba(34,211,238,0.30)]
    mb-2 mt-10
  "
      >
        {cont.title}
      </h1>{" "}
      <EditorContext.Provider value={{ editor }}>
        {showEdit && (
          <Toolbar
            ref={toolbarRef}
            style={{
              ...(isMobile
                ? {
                    bottom: `calc(100% - ${height - rect.y}px)`,
                  }
                : {}),
            }}
          >
            <button
              className=" bg-green-700 py-1 px-2 opacity-50 rounded hover:cursor-pointer hover:opacity-100 hover:shadow-[0_0_20px_2px_rgb(71,179,165,0.2)] transition-all duration-300 ease-in-out "
              onClick={data}
            >
              save
            </button>

            {mobileView === "main" ? (
              <MainToolbarContent
                onHighlighterClick={() => setMobileView("highlighter")}
                onLinkClick={() => setMobileView("link")}
                isMobile={isMobile}
              />
            ) : (
              <MobileToolbarContent
                type={mobileView === "highlighter" ? "highlighter" : "link"}
                onBack={() => setMobileView("main")}
              />
            )}
          </Toolbar>
        )}

        {showEdit && (
          <div className=" text-center mt-5 flex justify-center gap-5 items-center px-5">
            <div className="flex flex-col gap-3  md:gap-5 items-center justify-center ">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
                className=" w-full shadow-[0_0_50px_2px_rgb(255,255,255,0.1)]  text-white  outline-none rounded-[19px] px-5 py-2 border-2 border-dashed border-white/50"
              />
              <Select
                value={tagsTodb}
                onChange={(selected) => {
                  console.log(selected);
                  setTagsTodb(selected as { value: string; label: string }[]);
                }}
                isMulti
                placeholder="Tags"
                name="colors"
                options={allTags}
                className="basic-multi-select min-w-35"
                classNamePrefix="select"
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: "transparent",
                    borderRadius: "19px",
                    boxShadow: "0 0 50px 2px rgba(225, 225, 225, 0.2)",
                    border: " 2px dashed rgb(225,225,225,0.5)",
                    width: "100%",
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: "transparent",
                    borderRadius: "19px",
                    boxShadow: "0 0 50px 2px rgba(225, 225, 225, 0.2)",
                    border: " 2px dashed rgb(225,225,225,0.5)",
                    color: "white",
                    overflow: "hidden",
                  }),
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused
                      ? "rgb(225,225,225,0.1)"
                      : "transparent",
                    color: "white",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "white", // ✅ placeholder text color
                    opacity: "0.6",
                  }),
                }}
              />
            </div>
            <ImgUploader
              editableUrl={cont.titleImge}
              getTileImge={getTileImge}
            />
          </div>
        )}

        <EditorContent
          editor={editor}
          role="presentation"
          className="simple-editor-content"
        />
      </EditorContext.Provider>
    </div>
  );
}
