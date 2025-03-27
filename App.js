// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");
//   const [file, setFile] = useState(null);
//   const [filterType, setFilterType] = useState("");

//   useEffect(() => {
//     fetchFiles();
//   }, [filterType]);

//   const fetchFiles = async () => {
//     const { data } = await axios.get(`/api/files?type=${filterType}`);
//     setFiles(data);
//   };

//   const uploadFile = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("type", type);
//     formData.append("file", file);

//     await axios.post("/api/upload", formData);
//     fetchFiles();
//   };

//   return (
//     <div className="container">
//       <h1>Resolect - File Management System</h1>
//       <form onSubmit={uploadFile} className="upload-form">
//         <input type="text" placeholder="Document Name" required onChange={(e) => setName(e.target.value)} />
//         <select required onChange={(e) => setType(e.target.value)}>
//           <option value="">Select Type</option>
//           <option value="document">Document</option>
//           <option value="image">Image</option>
//           <option value="video">Video</option>
//         </select>
//         <input type="file" required onChange={(e) => setFile(e.target.files[0])} />
//         <button type="submit">Upload File</button>
//       </form>

//       <div className="filter">
//         <select onChange={(e) => setFilterType(e.target.value)}>
//           <option value="">All Files</option>
//           <option value="document">Documents</option>
//           <option value="image">Images</option>
//           <option value="video">Videos</option>
//         </select>
//       </div>

//       <div className="file-list">
//         {files.map((file) => (
//           <div key={file._id} className="file-item">
//             <p>
//               <strong>{file.name}</strong> ({file.type})
//             </p>
//             <a href={`/api/preview/${file._id}`} target="_blank" rel="noopener noreferrer">
//               Preview
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");
//   const [file, setFile] = useState(null);
//   const [filterType, setFilterType] = useState("");
//   const [showUpload, setShowUpload] = useState(false);

//   useEffect(() => {
//     fetchFiles();
//   }, [filterType]);

//   const fetchFiles = async () => {
//     const { data } = await axios.get(`/api/files?type=${filterType}`);
//     setFiles(data);
//   };

//   const uploadFile = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("type", type);
//     formData.append("file", file);

//     await axios.post("/api/upload", formData);
//     setShowUpload(false); // Hide upload page after upload
//     fetchFiles();
//   };

//   return (
//     <div className="container">
//       <h1>Resolect - File Management System</h1>

//       {/* Top Section - Upload Button and Filter */}
//       <div className="top-section">
//         <button onClick={() => setShowUpload(true)}>Upload New File</button>

//         <select onChange={(e) => setFilterType(e.target.value)}>
//           <option value="">All Files</option>
//           <option value="document">Documents</option>
//           <option value="image">Images</option>
//           <option value="video">Videos</option>
//         </select>
//       </div>

//       {/* Upload Modal/Page */}
//       {showUpload && (
//         <div className="upload-modal">
//           <h2>Upload New File</h2>
//           <form onSubmit={uploadFile} className="upload-form">
//             <input
//               type="text"
//               placeholder="Document Name"
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//             <select required onChange={(e) => setType(e.target.value)}>
//               <option value="">Select Type</option>
//               <option value="document">Document</option>
//               <option value="image">Image</option>
//               <option value="video">Video</option>
//             </select>
//             <input
//               type="file"
//               required
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//             <div className="button-group">
//               <button type="submit">Upload File</button>
//               <button onClick={() => setShowUpload(false)}>Cancel</button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* File List Section */}
//       <div className="file-list">
//         {files.map((file) => (
//           <div key={file._id} className="file-item">
//             <p>
//               <strong>{file.name}</strong> ({file.type})
//             </p>
//             <a
//               href={`/api/preview/${file._id}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Preview
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;






// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");
//   const [file, setFile] = useState(null);
//   const [filterType, setFilterType] = useState("");
//   const [showUpload, setShowUpload] = useState(false);

//   useEffect(() => {
//     fetchFiles();
//   }, [filterType]);

//   const fetchFiles = async () => {
//     const { data } = await axios.get(`/api/files?type=${filterType}`);
//     setFiles(data);
//   };

//   const uploadFile = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("type", type);
//     formData.append("file", file);

//     await axios.post("/api/upload", formData);
//     setShowUpload(false); // Hide upload page after upload
//     fetchFiles();
//   };

//   // Open file in a new tab with custom title
//   const previewFile = (file) => {
//     const fileUrl = `/api/preview/${file._id}`; // File URL
//     const newTab = window.open(fileUrl, "_blank"); // Open in new tab
//     if (newTab) {
//       newTab.onload = () => {
//         newTab.document.title = file.name; // Set tab title as file name
//       };
//     } else {
//       alert("Please allow pop-ups to preview the file.");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Resolect - File Management System</h1>

//       {/* Top Section - Upload Button and Filter */}
//       <div className="top-section">
//         <button onClick={() => setShowUpload(true)}>Upload New File</button>

//         <select onChange={(e) => setFilterType(e.target.value)}>
//           <option value="">All Files</option>
//           <option value="document">Documents</option>
//           <option value="image">Images</option>
//           <option value="video">Videos</option>
//         </select>
//       </div>

//       {/* Upload Modal/Page */}
//       {showUpload && (
//         <div className="upload-modal">
//           <h2>Upload New File</h2>
//           <form onSubmit={uploadFile} className="upload-form">
//             <input
//               type="text"
//               placeholder="Document Name"
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//             <select required onChange={(e) => setType(e.target.value)}>
//               <option value="">Select Type</option>
//               <option value="document">Document</option>
//               <option value="image">Image</option>
//               <option value="video">Video</option>
//             </select>
//             <input
//               type="file"
//               required
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//             <div className="button-group">
//               <button type="submit">Upload File</button>
//               <button type="button" onClick={() => setShowUpload(false)}>
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* File List Section */}
//       <div className="file-list">
//         {files.map((file) => (
//           <div key={file._id} className="file-item">
//             <p>
//               <strong>{file.name}</strong> ({file.type})
//             </p>
//             <button onClick={() => previewFile(file)}>Preview</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;






import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);
  const [filterType, setFilterType] = useState("");
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    fetchFiles();
  }, [filterType]);

  const fetchFiles = async () => {
    const { data } = await axios.get(`/api/files?type=${filterType}`);
    setFiles(data);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("file", file);

    await axios.post("/api/upload", formData);
    setShowUpload(false); // Hide upload modal after upload
    fetchFiles();
  };

  // Open file in a new tab
  const previewFile = (file) => {
    const fileUrl = `/uploads/${file.filename}`; // Access uploaded file
    const newTab = window.open(fileUrl, "_blank"); // Open file in a new tab
    if (newTab) {
      newTab.onload = () => {
        newTab.document.title = file.name; // Set tab title as file name
      };
    } else {
      alert("Please allow pop-ups to preview the file.");
    }
  };

  return (
    <div className="container">
      <h1>Resollect - File Management System</h1>

      {/* Top Section - Upload Button and Filter */}
      <div className="top-section">
        <button onClick={() => setShowUpload(true)}>Upload New File</button>

        <select onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All Files</option>
          <option value="document">Documents</option>
          <option value="image">Images</option>
          <option value="video">Videos</option>
        </select>
      </div>

      {/* Upload Modal/Page */}
      {showUpload && (
        <div className="upload-modal">
          <h2>Upload New File</h2>
          <form onSubmit={uploadFile} className="upload-form">
            <input
              type="text"
              placeholder="Document Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <select required onChange={(e) => setType(e.target.value)}>
              <option value="">Select Type</option>
              <option value="document">Document</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
            <input
              type="file"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div className="button-group">
              <button type="submit">Upload File</button>
              <button type="button" onClick={() => setShowUpload(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* File List Section */}
      <div className="file-list">
        {files.map((file) => (
          <div key={file._id} className="file-item">
            <p>
              <strong>{file.name}</strong> ({file.type})
            </p>
            <button onClick={() => previewFile(file)}>Preview</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");
//   const [file, setFile] = useState(null);
//   const [filterType, setFilterType] = useState("");
//   const [showUpload, setShowUpload] = useState(false); // Toggle for upload form

//   useEffect(() => {
//     fetchFiles();
//   }, [filterType]);

//   const fetchFiles = async () => {
//     try {
//       const { data } = await axios.get(`/api/files?type=${filterType}`);
//       setFiles(data);
//     } catch (error) {
//       console.error("Error fetching files:", error);
//     }
//   };

//   const uploadFile = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("type", type);
//     formData.append("file", file);

//     try {
//       await axios.post("/api/upload", formData);
//       fetchFiles(); // Refresh file list after upload
//       setShowUpload(false); // Hide upload form after success
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Resolect - File Management System</h1>

//       {/* Buttons to show upload form and filter dropdown */}
//       <div className="action-buttons">
//         <button onClick={() => setShowUpload(true)}>Upload New File</button>
//         <select onChange={(e) => setFilterType(e.target.value)}>
//           <option value="">All Files</option>
//           <option value="document">Documents</option>
//           <option value="image">Images</option>
//           <option value="video">Videos</option>
//         </select>
//       </div>

//       {/* Show Upload Form Only When Button is Clicked */}
//       {showUpload && (
//         <form onSubmit={uploadFile} className="upload-form">
//           <input
//             type="text"
//             placeholder="Document Name"
//             required
//             onChange={(e) => setName(e.target.value)}
//           />
//           <select required onChange={(e) => setType(e.target.value)}>
//             <option value="">Select Type</option>
//             <option value="document">Document</option>
//             <option value="image">Image</option>
//             <option value="video">Video</option>
//           </select>
//           <input
//             type="file"
//             required
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <button type="submit">Upload File</button>
//         </form>
//       )}

//       {/* List of Uploaded Files */}
//       <div className="file-list">
//         {files.map((file) => (
//           <div key={file._id} className="file-item">
//             <p>
//               <strong>{file.name}</strong> ({file.type})
//             </p>

//             {/* Updated Preview Button to Open Only File */}
//             <button
//               onClick={() =>
//                 window.open(
//                   `/api/preview/${file._id}`,
//                   "_blank",
//                   "noopener,noreferrer"
//                 )
//               }
//             >
//               Preview
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
