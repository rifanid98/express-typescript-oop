export type Category = {
  parent_id?: number,
  sort_order?: number,
  id: number,
  type?: string,
  name?: string,
  description?: string,
  icon_url?: string,
  is_single?: boolean,
  is_active?: number,
  is_show?: number,
  start?: string,
  end?: string,
  closedescription?: string
  childrens: Category[],
  isopenservice?: number
}

export type Chat = {
  id: number,
  uid: string,
  name: string,
  phone: string,
  gender: string,
  type: string,
  photo_url: string,
  count_chat: string
}

export type PChat = {
  find: number,
  page: number
}

type Object = {
  [key: string]: any
}

export type MedicalRecord = {
  id: number,
  code: string,
  type: string,
  item_name: string,
  item_category: string,
  medical_record_id: number,
  member_id: number,
  member_phone: string,
  patient_id: number,
  patient_name: string,
  patient_gender: string,
  patient_birth_date: string,
  partner_id: number,
  partner_name: string,
  partner_photo: string,
  partner_type: string,
  time: 'string',
  complaint: string,
  address: string,
  address_note: string,
  price: number,
  admin_fee: number,
  total: number,
  status: string,
  key_partner: number,
  key_member: number,
  member_lat: number,
  member_lng: number,
  partner_lat: number,
  partner_lng: number,
  soap: Object | null,
  medicine: Object | null
}

export type GetAppointment = {
  partnerId: number, 
  appointmentId?: number,
  completed?: boolean, 
  page?: number
}