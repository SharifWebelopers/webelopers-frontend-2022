import React, { useContext, useEffect, useState } from "react";
import {
  CircularProgress,
  Divider,
  InputAdornment,
  Modal,
  TextField,
} from "@mui/material";
import SearchIcon from "../icons/SearchIcon";
import SearchResult from "./SearchResult";
import { findTeammates } from "../../../../actions/team";

import styles from "./Search.module.scss";
import Context from "../../../../context/context";

const SearchBar = ({ setRefresh }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [virtual, setVirtual] = useState(6);

  const [context, setContext] = useContext(Context);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 30;
    if (bottom) {
      setVirtual(virtual + 6);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      setLoading(true);
      findTeammates()
        .then((res) => {
          setUsers(
            res.data.map((item: any) => ({
              ...item,
              username: item.first_name + " " + item.last_name,
            }))
          );
        })
        .catch(() => {
          setContext({
            ...context,
            snackbar: {
              open: true,
              message:
                "دریافت اطلاعات شرکت‌کنندگان با خطا مواجه شد، لطفا دوباره تلاش کنید!",
              variant: "error",
            },
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [modalOpen]);

  return (
    <>
      <TextField
        value={""}
        onClick={() => {
          setModalOpen(true);
        }}
        className={styles.searchbar}
        InputProps={{
          startAdornment: (
            <InputAdornment
              sx={{
                height: "100%",
                marginRight: "5%",
                "& > svg": {
                  height: "60%",
                  width: "100%",
                },
              }}
              position="start"
            >
              <SearchIcon color="#A8573C" />
            </InputAdornment>
          ),
        }}
        placeholder="جستجو بر اساس ایمیل"
      />

      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        className={styles.modal}
      >
        <div className={styles["modal-container"]}>
          {loading ? (
            <>
              <CircularProgress />
            </>
          ) : (
            <>
              <TextField
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVirtual(6);
                }}
                className={styles["search-input"]}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      sx={{
                        height: "100%",
                        marginRight: 0,
                        "& > svg": {
                          height: "60%",
                          width: "100%",
                        },
                      }}
                      position="end"
                    >
                      <SearchIcon color="#757575" />
                    </InputAdornment>
                  ),
                }}
              />
              <Divider
                sx={{ color: "#a3a2a2", width: "90%", borderColor: "unset" }}
              />
              <div
                className={styles["search-result-container"]}
                onScroll={handleScroll}
              >
                {users
                  .filter((user) => user.email.includes(search))
                  .map((user: any) => {
                    return (
                      <SearchResult
                        key={user.id}
                        imageSrc={user.profile_image}
                        username={user.username}
                        email={user.email}
                        setRefresh={setRefresh}
                      />
                    );
                  })
                  .slice(0, virtual)}
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default SearchBar;
