import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from "react-native";

type Course = {
  name: string;
  price: number;
  selected: boolean;
};

export default function CalculationScreen() {
  const [courses, setCourses] = useState<Course[]>([
    { name: "First Aid", price: 1500, selected: false },
    { name: "Sewing", price: 1500, selected: false },
    { name: "Landscaping", price: 1500, selected: false },
    { name: "Life Skills", price: 1000, selected: false },
    { name: "Child Minding", price: 750, selected: false },
    { name: "Cooking", price: 850, selected: false },
    { name: "Garden Maintenance", price: 600, selected: false },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [subtotal, setSubtotal] = useState(0);
  const [discountRate, setDiscountRate] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);

  // Booking list stored here 
  const [bookings, setBookings] = useState<any[]>([]);

  const toggleCourse = (idx: number) => {
    const updated = [...courses];
    updated[idx].selected = !updated[idx].selected;
    setCourses(updated);
  };

  const calculateTotal = () => {
    const selected = courses.filter(c => c.selected);
    let sub = selected.reduce((sum, c) => sum + c.price, 0);

    let rate = 0;
    if (selected.length === 2) rate = 0.05;
    else if (selected.length === 3) rate = 0.10;
    else if (selected.length > 3) rate = 0.15;

    let disc = sub * rate;
    let discountedSub = sub - disc;
    let vatAmount = discountedSub * 0.15;
    let finalAmount = discountedSub + vatAmount;

    // Save results into state
    setSubtotal(sub);
    setDiscountRate(rate);
    setDiscount(disc);
    setVat(vatAmount);
    setTotal(finalAmount);
  };

  const makeBooking = () => {
    const selected = courses.filter(c => c.selected);

    if (!name || !email || !phone || selected.length < 1) {
      Alert.alert("Missing information", "Fill contact details and choose at least 1 course");
      return;
    }

    const newBooking = {
      name,
      email,
      phone,
      selectedCourses: selected,
      subtotal,
      discount,
      vat,
      total
    };

    setBookings([...bookings, newBooking]);

    Alert.alert(" Booking Saved", "We will contact you soon");

    console.log("All Bookings:", bookings);
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Book Your Courses</Text>

      <Text style={styles.sectionTitle}>Courses</Text>
      {courses.map((course, i) => (
        <TouchableOpacity
          key={i}
          style={styles.course}
          onPress={() => toggleCourse(i)}
        >
          <View style={styles.checkbox}>
            {course.selected && <View style={styles.checked} />}
          </View>
          <Text style={styles.text}>{course.name} — R{course.price}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Contact Details</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} />

      <TouchableOpacity style={styles.calcButton} onPress={calculateTotal}>
        <Text style={styles.buttonText}>Calculate Total</Text>
      </TouchableOpacity>

      {subtotal > 0 && (
        <>
          <Text style={styles.summaryLine}>Subtotal: R{subtotal.toFixed(2)}</Text>
          <Text style={styles.summaryLine}>Discount ({discountRate * 100}%): -R{discount.toFixed(2)}</Text>
          <Text style={styles.summaryLine}>VAT (15%): R{vat.toFixed(2)}</Text>
          <Text style={styles.total}>Total: R{total.toFixed(2)}</Text>
        </>
      )}

      <TouchableOpacity style={styles.bookButton} onPress={makeBooking}>
        <Text style={styles.buttonText}>Make Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Simplified styling
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  title: { fontSize: 22, marginBottom: 15, fontWeight: "bold" },
  sectionTitle: { fontSize: 16, marginVertical: 10, fontWeight: "bold" },
  course: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  checkbox: {
    width: 20, height: 20, borderWidth: 1, borderColor: "#555",
    marginRight: 10, justifyContent: "center", alignItems: "center"
  },
  checked: {
    width: 14, height: 14, backgroundColor: "green"
  },
  text: { fontSize: 14 },
  input: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 6,
    padding: 10, marginBottom: 10
  },
  calcButton: {
    backgroundColor: "#007bff", padding: 12, borderRadius: 6,
    alignItems: "center", marginTop: 10
  },
  bookButton: {
    backgroundColor: "green", padding: 15, borderRadius: 6,
    alignItems: "center", marginTop: 20, marginBottom: 40
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  summaryLine: { marginTop: 5, fontSize: 14 },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 10 }
});
