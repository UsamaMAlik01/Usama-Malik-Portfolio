import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import emailjs from 'emailjs-com'

export const sendContactEmail = createAsyncThunk(
  'contact/sendEmail',
  async (formData, { rejectWithValue }) => {
    try {
      await emailjs.send(
        'service_m0pedwt',
        'template_sy1vy4a',
        {
          from_name:  formData.name,
          from_email: formData.email,
          message:    formData.message,
        },
        'q4QNbEO1PJtaciwLM'
      )
      return 'success'
    } catch (err) {
      return rejectWithValue('Failed to send. Please try again.')
    }
  }
)

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    formData: { name: '', email: '', message: '' },
    status: 'idle',
    error: null,
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload
      state.formData[field] = value
    },
    resetForm: (state) => {
      state.formData = { name: '', email: '', message: '' }
      state.status = 'idle'
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactEmail.pending,   (state) => { state.status = 'loading'   })
      .addCase(sendContactEmail.fulfilled, (state) => { state.status = 'succeeded' })
      .addCase(sendContactEmail.rejected,  (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  },
})

export const { updateField, resetForm } = contactSlice.actions
export default contactSlice.reducer