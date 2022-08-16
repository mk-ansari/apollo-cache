import { gql } from "@apollo/client";

// sign up method
export const ADD_TEMP_CLIENT = gql`
  mutation AddTempClient($first_name: String!, $last_name: String!, $business_email: String!, $country_code: Int!, $mobile_no: String!, $password: String!) {
    addTempClient(first_name: $first_name, last_name: $last_name, business_email: $business_email, country_code: $country_code, mobile_no: $mobile_no, password: $password) {
      status
      message
    }
  }
`;

export const SEND_OR_RESEND_CLIENT_OTP = gql`
  mutation SENDORRESENDCLIENTOTP(
    $mobile_no: String!
    $country_code: Int!
    $is_login: Boolean!
  ) {
    sendOrResendClientOtp(
      mobile_no: $mobile_no
      country_code: $country_code
      is_login: $is_login
    ) {
      status
      message
    }
  }
`;

export const SUBMIT_SIGNUP_OTP = gql`
  mutation SubmitSignUpOtp(
    $mobile_no: String!
    $country_code: Int!
    $otp: Int!
  ) {
    submitSignUpOtp(
      mobile_no: $mobile_no
      country_code: $country_code
      otp: $otp
    ) {
      status
      message
    }
  }
`;

export const CHECK_DOMAIN_NAME = gql`
  mutation CheckDomainName($domain_name: String!){
    checkDomainName(domain_name: $domain_name) {
      message
      status
    }
  }
`;

export const ADD_CLIENT = gql`
  mutation AddClient(
    $first_name: String!,
    $last_name: String!,
    $business_email: String!,
    $business_type: String!,
    $business_name: String!,
    $business_address: String!,
    $country_code: Int!,
    $mobile_no: String!,
    $password: String!,
    $is_term_condition_verify: Boolean!
    $domain_name: String!
  ) {
    addClient(
      first_name: $first_name,
      last_name: $last_name,
      business_email: $business_email,
      business_type: $business_type,
      business_name: $business_name,
      business_address: $business_address,
      country_code: $country_code,
      mobile_no: $mobile_no,
      password: $password,
      is_term_condition_verify: $is_term_condition_verify
      domain_name: $domain_name
    ) {
      status
      message
      data {
        id
        first_name
        last_name
        business_email
        business_name
        business_address
        business_type
        country_code
        mobile_no
        is_free_access
        is_signage_access
        is_sales_access
        is_wifi_access
        is_hub_access
        is_menu_online_access
        is_schedule_access
        is_loyalty_program_access
        is_reputation_access
        jwt_token
        domain_name
      }
    }
  }
`;

// sign in method
export const SUBMIT_CLIENT_OTP_SING_IN = gql`
  mutation SubmitClientOtp($mobile_no: String, $country_code: Int, $otp: Int, $password: String) {
    submitClientOtp(mobile_no: $mobile_no, country_code: $country_code, otp: $otp, password: $password) {
      status
      message
      data {
        id
        first_name
        last_name
        business_email
        business_name
        business_address
        country_code
        mobile_no
        is_free_access
        is_signage_access
        is_sales_access
        is_wifi_access
        is_hub_access
        is_menu_online_access
        is_schedule_access
        is_loyalty_program_access
        is_reputation_access
        business_type
        jwt_token
        domain_name
      }
    }
  }
`;

// forgot password
export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email_id: String!) {
    forgotPassword(email_id: $email_id) {
      status
      message
    }
  }
`;

// sub user login
export const SUB_USER_LOGIN = gql`
  mutation SubUserLogin($pin: Int!, $url: String!) {
    subUserLogin(pin: $pin, url: $url) {
      status
      message
      data {
        id
      is_signage_access
      is_sales_access
      is_wifi_access
      is_hub_access
      is_menu_online_access
      is_schedule_access
      is_loyalty_program_access
      is_reputation_access
      image_path
      jwt_token
      first_name
      last_name
      role
      email_id
      country_code
      mobile_no
      }
    }
  }
`;

// logout
export const LOG_OUT_USERS = gql`
  mutation Logout {
    logout {
      status
      message
    }
  }
`;