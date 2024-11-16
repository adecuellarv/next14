import { env } from "@/config/env"
import { shopifyUrls } from "./urls"

export const getCollections = async () => {
    try {
        const response = await fetch(shopifyUrls.collections.all, {
            headers: new Headers({
              'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            })
          })
        const { smart_collections } = await response.json()
        if (smart_collections?.length) {
            const transformedCollections = smart_collections?.map((collection: any) => {
                return {
                    id: collection.id,
                    title: collection.title,
                    handle: collection.handle
                }
            })
            return transformedCollections
        }
        else return []
    } catch (error) {
        console.log(error)
    }
}

export const getCollectionProducts = async (id: string) => {
    try {
      const response = await fetch(shopifyUrls.collections.products(id), {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
        })
      })
      const { products } = await response.json()
      return products
    } catch (error) {
      console.log(error)
    }
  }