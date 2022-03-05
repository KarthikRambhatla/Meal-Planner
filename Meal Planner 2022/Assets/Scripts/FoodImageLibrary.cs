using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class FoodImageLibrary : MonoBehaviour
{
    public GameObject foodImgOriginal;
    public List<GameObject> foodLibrarySubcontainers;
    // Start is called before the first frame update
    void Start()
    {
        //find the number of images based on directory location
        //var dir = Directory.GetFiles("Assets/Images/foodItems", "*.png");
        //foreach (var item in dir)
        //{
        //var targetName = item.Substring(24);
        //GameObject target = new GameObject(targetName);
        //SpriteRenderer renderer = target.AddComponent<SpriteRenderer>();
        //code results as null for right now -- NEED TO FIX
        //renderer.sprite = Resources.Load<Sprite>("Assets/Images/foodItems\\" + targetName);
        //PopulateMenu(dir.Length);
        //}

        PopulateMenu(10);
    }

    // Update is called once per frame
    void Update()
    {

    }
    public void PopulateMenu(int foodNum)
    {
        for (int n = 0; n < foodLibrarySubcontainers.Count; n++)
        {
            for(int i = 0; i < foodNum; i++)
            {
                GameObject foodMenuItem = Instantiate(foodImgOriginal, foodLibrarySubcontainers[n].transform);
                foodMenuItem.transform.position.Set(foodMenuItem.transform.position.x * .5f * i, foodMenuItem.transform.position.y, foodMenuItem.transform.position.z);
                Debug.Log(foodMenuItem.transform.position);
                foodMenuItem.name = "Food Item " + (i + 1);
            }
        }
    }

}
