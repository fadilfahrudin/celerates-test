"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { UserType } from "../type/userType";

const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 20,
        fontFamily: "Helvetica",
    },
    header: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
        textTransform: "uppercase",
    },
    section: {
        padding: 15,
        border: "1px solid #CCC",
        borderRadius: 5,
        backgroundColor: "#F9F9F9",
        marginBottom: 10,
    },
    label: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#555",
    },
    value: {
        fontSize: 14,
        marginBottom: 5,
        color: "#222",
    },
    divider: {
        borderBottom: "1px solid #DDD",
        marginVertical: 10,
    },
    watermarkContainer: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    watermark: {
        fontSize: 60,
        color: "rgba(0,0,0,0.08)",
        transform: "rotate(-30deg)",
        textTransform: "uppercase",
        textAlign: "center",
        fontWeight: "bold",
        userSelect: "none",
    },
});

const PDFDocument = ({ userData }: { userData: UserType }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Watermark */}
                <View style={styles.watermarkContainer}>
                    <Text style={styles.watermark}>Celerates</Text>
                </View>

                {/* Header */}
                <Text style={styles.header}>User Profile</Text>

                {/* Informasi User */}
                <View style={styles.section}>
                    <Text style={styles.label}>Full Name:</Text>
                    <Text style={styles.value}>{userData?.name || "N/A"}</Text>
                    
                    <View style={styles.divider} />

                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{userData?.email || "N/A"}</Text>
                    
                    <View style={styles.divider} />

                    <Text style={styles.label}>Phone Number:</Text>
                    <Text style={styles.value}>{userData?.phone || "N/A"}</Text>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;
