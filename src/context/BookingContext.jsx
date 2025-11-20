import { createContext, useState, useContext } from 'react';

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(null);

  const createBooking = async (bookingData) => {
    try {
      // TODO: Implement actual booking API call
      // const response = await api.createBooking(bookingData);
      const newBooking = {
        id: Date.now(),
        ...bookingData,
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      setBookings([...bookings, newBooking]);
      setCurrentBooking(newBooking);
      return { success: true, booking: newBooking };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const updateBooking = async (bookingId, updateData) => {
    try {
      // TODO: Implement actual update API call
      // const response = await api.updateBooking(bookingId, updateData);
      const updatedBookings = bookings.map(booking =>
        booking.id === bookingId
          ? { ...booking, ...updateData }
          : booking
      );
      setBookings(updatedBookings);

      if (currentBooking?.id === bookingId) {
        setCurrentBooking({ ...currentBooking, ...updateData });
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      // TODO: Implement actual cancel API call
      // const response = await api.cancelBooking(bookingId);
      return updateBooking(bookingId, { status: 'cancelled' });
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const getBookingById = (bookingId) => {
    return bookings.find(booking => booking.id === bookingId);
  };

  const getUserBookings = (userId) => {
    return bookings.filter(booking => booking.userId === userId);
  };

  const value = {
    bookings,
    currentBooking,
    setCurrentBooking,
    createBooking,
    updateBooking,
    cancelBooking,
    getBookingById,
    getUserBookings
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export default BookingContext;
