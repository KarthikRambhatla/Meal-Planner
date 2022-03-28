using System.Collections;
using System.Collections.Generic;
using System.Data.SQLite;
using System.IO;
using UnityEngine;

public class SQLite : MonoBehaviour
{
    public static string pathToDB { get; set; }

    public static SQLiteConnection conn { get; set; }

    // Start is called before the first frame update
    void Start()
    {
        pathToDB = GetDBPath();
        conn = CreateConnection();
    }

    // Get DB path depending on dev vs prod environment
    private static string GetDBPath()
    {
        if (Application.isEditor)
        {
            return Path.Combine(Application.streamingAssetsPath, "database.db");
        }
        return Path.Combine(Application.dataPath, "database.db");
    }

    // Create connection to the DB
    private static SQLiteConnection CreateConnection()
    {
        SQLiteConnection newConnection =
            new SQLiteConnection("Data Source=" +
                pathToDB +
                ";Version=3;New=True;Compress=True;");
        try
        {
            newConnection.Open();
        }
        catch (System.Exception e)
        {
            Debug.Log(e.Message);
            throw;
        }
        return newConnection;
    }

    // Create custom item in DB

    // Read all items from DB

    // Read single item from DB

    // Update item meal types in DB

    // Update item food grade in DB

    // Delete item from DB (hide if default item)

    // Create save of current plate in DB

    // Create set meal from current plate in DB

    // Read all set meals from DB

    // Read single plate from DB

    // Update save of current plate in DB

    // Update set meal in DB

    // Delete set meal from DB

    // Check dates, delete saves if day passed

    // Reset DB to default
    // 		1) Deletes custom items and all plates
    //  	2) Unhides all default items and resets food grades
    //		3) Sets default items as available for all meal types
}
