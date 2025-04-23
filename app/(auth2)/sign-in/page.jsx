'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-2xl"> 
        <SignIn.Root>
          <SignIn.Step name="start">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 text-shadow-lg">Welcome Back</h1>
            </div>

            <div className="space-y-4">
              
              <Clerk.Field name="identifier" className="space-y-2">
                <Clerk.Label className="block text-sm font-medium text-gray-700">Email</Clerk.Label>
                <Clerk.Input 
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                />
                <Clerk.FieldError className="text-red-500 text-xs" />
              </Clerk.Field>

              
              <Clerk.Field name="password" className="space-y-2">
                <Clerk.Label className="block text-sm font-medium text-gray-700">Password</Clerk.Label>
                <Clerk.Input 
                  type="password" 
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                />
                <Clerk.FieldError className="text-red-500 text-xs" />
              </Clerk.Field>

            
              <SignIn.Action 
                submit 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 text-sm font-medium text-white
                 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
              >
                Log in
              </SignIn.Action>

              
              <div className="flex justify-end text-sm text-gray-600">
                <SignIn.Action 
                  navigate="forgot-password" 
                  className="font-medium text-blue-600 hover:text-blue-500 hover:underline focus:outline-none focus:underline cursor-pointer"
                >
                  Forgot password?
                </SignIn.Action>
              </div>

              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              
              <Clerk.Connection 
                name="google" 
                className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                Continue with Google
              </Clerk.Connection>

             
              <div className="text-center text-sm text-gray-600">
                New to ClickView?{' '}
                <a href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500 hover:underline cursor-pointer">
                  Sign up
                </a>
              </div>
            </div>
          </SignIn.Step>

          <SignIn.Step name="verifications">
            
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
  )
}