<Routes>
  <Route path="/handler/*" element={<HandlerRoutes />} />
  <Route path="/sign-up" element={<SignUpPage />} />
  <Route path="/sign-in" element={<SignInPage />} />
  <Route path="/*" element={<App />} />
</Routes>