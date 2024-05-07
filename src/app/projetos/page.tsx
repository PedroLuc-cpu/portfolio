"use client"
import { useCallback, useEffect, useState } from "react";
import { Box } from "../components/box/Box";
import CardOpenging from '../components/card/Card';
import { API } from "@/axios/api";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface CardDataOpen {
  id: number
  name: string
  description: string
  full_name: string
}

export default function Projetos() {
  const { toast } = useToast();
  const [repositories, setRepositories] = useState<CardDataOpen[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  const handleErrors = useCallback(() => {
    toast({
      title: 'Error',
      description: "Failed to fetch repositories",
      duration: 3000,
      action: <ToastAction  altText="Close">Close</ToastAction>
    });
  }, [toast]);

  useEffect(() => {
    API.get("repos")
      .then((response) => {
        setRepositories(response.data);
        setLoading(false);

      })
      .catch((error) => {
        console.error(error);
        handleErrors();
        setLoading(false);
      });
  }, [handleErrors]);

  

  return (
    <Box className="flex flex-col gap-y-2 m-2">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {Array.isArray(repositories) && repositories.length > 0 ? (
            repositories.map((repository) => (
              <CardOpenging 
                key={repository.id}
                title={repository.name}
                description={repository.description}
                content={repository.full_name}
                footer={repository.name} />
            ))
          ) : (
            <div>
              <p>No repositories found.</p>
              <Button onClick={handleErrors} className="hidden"></Button>
            </div>
          )}
        </>
      )}
      
    </Box>
  );
}
