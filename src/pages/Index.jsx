import {React, useEffect} from 'react'
import { PostList } from '../components/PostList'
import {useDispatch, useSelector} from "react-redux";
import { fetchData } from "../state/postSlice";

export const Index = () => {
  const dispatch = useDispatch();
  const {records, loading, error} = useSelector((state)=>state.posts)
  useEffect(()=>{
    dispatch(fetchData());
  }, [])
  

  return (
    <PostList data={records}/>
  )
}
