 import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";
import { FaSchool } from "react-icons/fa";
import Button from "./buttons/Button";

export default function Education() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mb-6">
       <Button title= "Education" />
      </div>

      <div style={pageWrapper}>
        <div
          className="mybox  relative group overflow-hidden"
          style={getContainerStyle(isMobile)}
        >
        

          {/* Tabs and Content */}
          <nav style={nav}>
            <ul style={tabsContainer}>
              {tabs.map((item) => (
                <motion.li
                  key={item.label}
                  initial={false}
                  animate={{
                    backgroundColor:
                      item === selectedTab ? "#222" : "transparent",
                  }}
                  style={tab}
                  onClick={() => setSelectedTab(item)}
                >
                  <span
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    {item.icon} {item.label}
                  </span>
                  {item === selectedTab ? (
                    <motion.div
                      style={underline}
                      layoutId="underline"
                      id="underline"
                    />
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </nav>

          <main style={iconContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={icon}
              >
                {selectedTab ? selectedTab.icon : "🎓"}
                <div style={details}>
                  <h3>{selectedTab?.title}</h3>
                  <p>{selectedTab?.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}

/**
 * ==============   Styles   ================
 */

const pageWrapper = {
  backgroundColor: "#000",
  color: "#fff",
  minHeight: "auto",
  margin: "0 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4px 10px",
};

// Dynamic Container Style based on screen
const getContainerStyle = (isMobile) => ({
  width: isMobile ? "90%" : "65%",
  maxWidth: 1000,
  height: "auto",
  borderRadius: 10,
  background: "#111",
  overflow: "hidden",
  boxShadow:
    "0 1px 1px rgba(255,255,255,0.1), 0 2px 2px rgba(255,255,255,0.1), 0 4px 4px rgba(255,255,255,0.1)",
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

// Nav
const nav = {
  background: "#111",
  padding: "5px 5px 0",
  borderRadius: "10px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid #333",
};

const tabsStyles = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontWeight: 500,
  fontSize: 14,
};

const tabsContainer = {
  ...tabsStyles,
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
};

const tab = {
  ...tabsStyles,
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
  padding: "10px 15px",
  position: "relative",
  cursor: "pointer",
  height: 44,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  color: "#fff",
  transition: "background 0.3s",
};

const underline = {
  position: "absolute",
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: "#ffa500",
};

const iconContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  flexDirection: "column",
  padding: 20,
};

const icon = {
  fontSize: 64,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const details = {
  marginTop: 16,
  fontSize: 14,
  color: "#ccc",
  textAlign: "center",
  maxWidth: 300,
};

/**
 * ==============   Education Data   ================
 */

const tabs = [
  {
    icon: (
      <img
        src="/images/kota.png"
        alt="College Logo"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    ),
    label: "BCA College",
    title: "Bachelor of Computer Applications",
    description: "Kota University (2022–2025) — CGPA: 7.1/10",
  },
  {
    icon: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FaSchool size={36} color="#32cd32" />
      </div>
    ),
    label: "12th School",
    title: "Senior Secondary (Maths)",
    description: "Jhalawar Govt Senior Secondary School — Marks: 67%",
  },
];
