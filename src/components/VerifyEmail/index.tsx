import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { verify } from "../../actions/auth";

function VerifyEmail() {
  const router = useRouter();

  const [isValid, setIsValid] = useState(
    !!(router.query?.uid && router.query?.token)
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isValid)
      verify({
        encoded_user_id: router.query.uid,
        token: router.query.token,
      });
  }, [isValid]);

  useEffect(() => {
    setIsValid(!!(router.query?.uid && router.query?.token));
  }, [router.query]);

  return <div>{isValid ? (loading ? "loading" : "done") : "invalid"}</div>;
}

export default VerifyEmail;
