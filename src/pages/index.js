import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Todo.module.css";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        {/* Todo Form */}
        <TodoForm />

        {/* Todo List */}
        <TodoList />
      </main>
    </>
  );
}
